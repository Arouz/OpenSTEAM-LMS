
class Folders {
    /**
     * Creates an instance of Folders.
     * @public
     */
    constructor() {
        this.userFolders = [];
        this.viewModal = ["#create-folder-manager", "#delete-folder-manager", "#update-folder-manager"];
        this.actualFolder = null;
        this.treeFolder = $("#breadcrumb");
        this.dragula = null;
        this.parent = null;
        this.objectToMove = null;
        this.objectId = null;
    }

    init() {
        this.dragula = dragula();
        this.getAllUserFolders().then(res => {
            this.userFolders = res;
            setTimeout(() => {
                this.dragulaInitObjects();
            }, 1000);
        })

        $('#dashboard-activities-teacher').on('click', () => {
            this.resetTreeFolders();
        })

        $('body').on('click', '.folder-card', function () {
            if (!$(this).find("i:hover").length && !$(this).find(".dropdown-menu:hover").length) {
                let id = $(this).attr('data-id');
                folders.openFolder(id);
            }
        })
    }

    openFolderModal() {
        this.resetInputs();
        pseudoModal.openModal("folder-manager-modal");
        $("#create-folder-manager").show();
    }
    
    persistCreateFolder() {
        let name = $("#folder_create_name").val(),
            parent = this.actualFolder;
        this.createFolder(name, parent).then(res => {
            if (!res.hasOwnProperty("error")) {
                this.userFolders.push(res);
                this.refreshSettings(this.actualFolder);
            } else {
                console.log("error");
            }
        })
    }
    
    persistDeleteFolder() {
        let id = this.actualFolder,
            parent = this.getFolderById(this.actualFolder).parentFolder;

        this.deleteFolderById(id).then(res => {
            if (!res.hasOwnProperty("error")) {
                this.getAllUserFolders().then(res => {
                    this.refreshSettings();
                    this.userFolders = res;
                    let backToId = parent ? parent.id : null;
                    this.goToFolder(backToId);
                })
            } else {
                console.log("error");
            }
        })
    }
    
    persistUpdateFolder() {
        let id = this.actualFolder,
            name = $("#folder_update_name").val();
            
        this.updateFolderById(id, name).then(res => {
            if (!res.hasOwnProperty("error")) {
                this.replaceFolderData(res);
                this.refreshSettings(this.getFolderById(id).parentFolder.id);
            } else {
                console.log("error");
            }
        })
    }
    
    deleteFolder(folderId) {
        this.resetInputs();
        this.actualFolder = folderId;
        pseudoModal.openModal("folder-manager-modal");
        $("#delete-folder-manager").show();
    }

    updateFolder(folderId) {
        this.resetInputs();
        this.actualFolder = folderId;
        let folder = this.getFolderById(folderId);
        $("#folder_update_name").val(folder.name);
        pseudoModal.openModal("folder-manager-modal");
        $("#update-folder-manager").show();
    }

    refreshSettings(location = null) {
        this.parent = null;
        this.actualFolder = null;
        this.displayAndDragulaInitObjects();
        if (location) {
            this.goToFolder(location);
        }
        this.resetInputs();
    }

    resetInputs() {
        this.viewModal.forEach(view => {
            $(view).hide();
        });
        $("#folder_create_name").val("");
        $("#folder_update_name").val("");
        pseudoModal.closeModal("folder-manager-modal");
    }

    /**
     * Utils
     */

    getFolderById(id) {
        return this.userFolders.find(folder => folder.id == id);
    }

    replaceFolderData(folder) {
        let index = this.userFolders.findIndex(f => f.id == folder.id);
        this.userFolders[index] = folder;
    }

    openFolder(folderId) {
        this.actualFolder = folderId;
        this.addTreeFolder(this.getFolderById(folderId));
        this.displayAndDragulaInitObjects();
    }

    addTreeFolder(folder) {
        if (this.treeFolder.html() == "") {
            this.resetTreeFolders();
        }
        this.treeFolder.append(`<button class="btn tree-folders-items" onclick="folders.goToFolder(${folder.id})">📁 ${folder.name}</button>`);  
    }

    goToFolder(folderId) {
        this.actualFolder = folderId;
        this.resetTreeFolders();
        if (folderId != null) {
            this.createTreeFolders();
        }
        this.displayAndDragulaInitObjects();
    }

    deleteFolderFromUserFolders(id) {
        let index = this.userFolders.findIndex(f => f.id == id);
        this.userFolders.splice(index, 1);
    }

    resetTreeFolders() {
        this.treeFolder.html(`<button class="btn tree-folders-items" onclick="folders.goToFolder(null)">Mes activités</button>`);
    }

    createTreeFolders() {
        let actualFolder = this.getFolderById(this.actualFolder),
            idOfParents = [actualFolder],
            parent = actualFolder.parentFolder;
        
        while (parent) {
            idOfParents.push(parent);
            parent = this.getFolderById(parent.id).parentFolder;
        }

        if (this.treeFolder.html() == "") {
            this.resetTreeFolders();
        }

        idOfParents.reverse().forEach(folder => {
            this.treeFolder.append(`<button class="btn tree-folders-items" onclick="folders.goToFolder(${folder.id})">📁 ${folder.name}</button>`);
        });
    }

    displayAndDragulaInitObjects() {
        Main.getClassroomManager().getTeacherActivities(Main.getClassroomManager()).then(() => {
            teacherActivitiesDisplay();
            this.dragulaInitObjects();
        });
    }

    moveToFolderModal(id, itemType) {
        this.objectToMove = itemType;
        this.objectId = id;
        
        let folderTreeContent = $("#folders-tree-content-modal"),
            content = "",
            rootFolderTranslation = i18next.t("classroom.activities.rootFolder");
        const foldersWithoutParent = this.userFolders.filter(folder => folder.parentFolder == null);
        
        folderTreeContent.html("");
        if (foldersWithoutParent.length > 0) {
            content += `<ul id="folders-move-to-list">`;
            content += `<li>
                            <input type="radio" name="tree-structure" id="0">
                                <label for="0">${rootFolderTranslation}</label>
                            </input>
                            ${this.createChildActivitiesUl(null)}
                        </li>`;

            foldersWithoutParent.forEach(folder => {
                content += `<li>
                                <input type="radio" name="tree-structure" id="${folder.id}">
                                <label for="${folder.id}">📁 - ${folder.name}</label>
                                </input>
                                ${this.createChildActivitiesUl(folder.id)}
                                ${this.createChildUl(folder.id)}
                            </li>`;
            });
            content += `</ul>`;
        }
        folderTreeContent.html(content);
        

        pseudoModal.openModal("folders-move-to");
    }

    createChildUl(folder) {
        let children = this.userFolders.filter(f => f.parentFolder != null),
            content = "";
        children = children.filter(child => child.parentFolder.id == folder);
        if (children.length > 0) {
            content += `<ul>`;
            children.forEach(child => {
                content += `<li>
                                <input type="radio" name="tree-structure" id="${child.id}">
                                    <label for="${child.id}">📁 - ${child.name}</label>
                                </input>
                                ${this.createChildActivitiesUl(child.id)}
                                ${this.createChildUl(child.id)}
                            </li>`;
            });
            content += `</ul>`;
        }
        return content;
    }

    createChildActivitiesUl(folder) {
        let myActivities = Main.getClassroomManager()._myTeacherActivities,
            children = [],
            content = "";


        if (folder != null) {
            children = myActivities.filter(child => {
                if (child.folder != null) {
                    child.folder.id == folder
                }
            });
        } else {
            children = myActivities.filter(child => child.folder == null);
        }

        if (children.length > 0) {
            content += `<ul>`;
            children.forEach(child => {
                content += `<li>
                                <label for="${child.id}">💻 - ${child.title}</label>
                            </li>`;
            });
            content += `</ul>`;
        }
        return content;
    }

    persistMoveToFolder() {
        let folderId = $("input[name='tree-structure']:checked").attr("id");
        if (folderId == "0") {
            folderId = null;
        }
        if (this.objectToMove == "folder") {
            this.moveFolderToFolder(this.objectId, folderId).then(res => {
                this.manageResponseFromMoved(res);
            })
        } else if (this.objectToMove == "activity") {
            folders.moveActivityToFolder(this.objectId, folderId).then(res => {
                this.manageResponseFromMoved(res);
            })
        }
        this.goToFolder(folderId);
        pseudoModal.closeModal("folders-move-to");
    }

    manageResponseFromMoved(res) {
        if (!res.hasOwnProperty("error")) {
            folders.getAllUserFolders().then(res => {
                folders.userFolders = res;
                folders.displayAndDragulaInitObjects();
            })
        } else {
            console.log("error");
        }
    }

    dragulaInitObjects() {
        // Reset the dragula fields
        this.dragula.containers = [];
        //this.dragula.containers.push(document.querySelector('#list-activities-teacher'));
        let foldersArray = document.querySelectorAll('.folder-item');
        let activitiesArray = document.querySelectorAll('.activity-item');

        this.dragula = dragula([...activitiesArray, ...foldersArray])
            .on('drop', function(el, target, source) {
                if (target != undefined && source != undefined) {
                    if (target.className == "folder-item") {
                        let elId = source.getAttribute('data-id'),
                            targetId = target.getAttribute('data-id');
                        
                        if (source.className == "folder-item") {
                            folders.moveFolderToFolder(elId, targetId).then(res => {
                                folders.manageResponseFromMoved(res);
                            })
                        } else {
                            folders.moveActivityToFolder(elId, targetId).then(res => {
                                folders.manageResponseFromMoved(res);
                            })
                        }
                    } else {
                        folders.displayAndDragulaInitObjects();
                    }
                } else {
                    folders.displayAndDragulaInitObjects();
                }
            }).on('shadow', function(el) { 
                el.remove();
            }).on('cancel', function() {
                folders.displayAndDragulaInitObjects();
            })
    }


    /**
     * XHR
    */

    createFolder($name, $parent = null) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: "/routing/Routing.php?controller=activity&action=create_folder",
                data: {
                    name: $name,
                    parent: $parent
                },
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function () {
                    reject();
                }
            });
        })
    }

    deleteFolderById(id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: "/routing/Routing.php?controller=activity&action=delete_folder",
                data: {
                    id: id,
                },
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function () {
                    reject();
                }
            });
        })
    }

    updateFolderById(id, $name) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: "/routing/Routing.php?controller=activity&action=update_folder",
                data: {
                    id: id,
                    name: $name
                },
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function () {
                    reject();
                }
            });
        })
    }

    getAllUserFolders() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: "/routing/Routing.php?controller=activity&action=get_all_user_folders",
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function () {
                    reject();
                }
            });
        })
    }

    moveActivityToFolder(activityId, folderId) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: "/routing/Routing.php?controller=activity&action=moveActiToFolder",
                data: {
                    activityId: activityId,
                    folderId: folderId
                },
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function () {
                    reject();
                }
            });
        })
    }

    moveFolderToFolder(folderId, destinationFolderId) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: "/routing/Routing.php?controller=activity&action=moveFolderToFolder",
                data: {
                    folderId: folderId,
                    destinationFolderId: destinationFolderId
                },
                success: function (res) {
                    resolve(JSON.parse(res));
                },
                error: function () {
                    reject();
                }
            });
        })
    }
}
// Initialize
const folders = new Folders();
folders.init();


