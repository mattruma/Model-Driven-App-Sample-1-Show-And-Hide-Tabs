var ModelDrivenAppSample1ItemEvents = window.ModelDrivenAppSample1ItemEvents || {};

(function () {

    const TAB_1 = 968050000;
    const TAB_2 = 968050001;
    const TAB_3 = 968050002;

    // Code to run in the form OnLoad event
    this.formOnLoad = function (executionContext) {
        console.log("ModelDrivenAppSample1ItemEvents - formOnLoad");

        // Current version of the file
        console.log("version", "2023.06.07.1");

        var formContext = executionContext.getFormContext();

        // Show visible tab
        setVisibleTab(formContext);
    }

    // Code to run in the column OnChange event 
    this.attributeOnChange = function (executionContext) {
        console.log("ModelDrivenAppSample1ItemEvents - attributeOnChange");

        var formContext = executionContext.getFormContext();

        setVisibleTab(formContext);
    }

    // Code to run in the form OnSave event 
    this.formOnSave = function () {
        console.log("ModelDrivenAppSample1ItemEvents - formOnSave");
    }

    // Code to run to determine if a record is new
    function isNewRecord(formContext) {
        // Get the reference for the entity
        var entityReference = formContext.data.entity.getEntityReference();

        // If the Id is empty, which will return false, then this is a new record
        return !entityReference.id;
    }

    function setVisibleTab(formContext) {
        console.log("ModelDrivenAppSample1ItemEvents - setVisibleTab");

        // Hide all the tabs
        toggleTab(formContext, 'tab_1', false);
        toggleTab(formContext, 'tab_2', false);
        toggleTab(formContext, 'tab_3', false);

        // Determine which tab to display
        switch (formContext.getAttribute("maruma_tabs").getValue()) {
            case TAB_1:
                toggleTab(formContext, 'tab_1', true);
                break;
            case TAB_2:
                toggleTab(formContext, 'tab_2', true);
                break;
            case TAB_3:
                toggleTab(formContext, 'tab_3', true);
                break;
            default:
        }
    }

    // Code to toggle visibility on a tab
    function toggleTab(formContext, tabName, isVisible) {
        console.log("ModelDrivenAppSample1ItemEvents - toggleTab");

        // formContext.ui.tabs (Client API reference)
        // https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs
        var tab = formContext.ui.tabs.get(tabName);

        // Toggle visibility of the tab
        tab.setVisible(isVisible);
    }
}).call(ModelDrivenAppSample1ItemEvents);