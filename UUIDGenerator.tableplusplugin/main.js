import { getUUID } from './library/helper';

var setContent = function(context, uuid) {
    // Get all the items
    var row = context.clickedRow();
    var col = context.clickedColumn();
    var item = context.currentItem();

    if (row == null || col == null || item == null) {
        context.alert('Error', 'No item cliked');
        return;
    }

    if (uuid == null) {
        context.alert('Error', 'Could not generate UUID');
        return;
    }

    // Make sure the constant is nil
    row.setConstant(col.name, '');

    // Update row value
    row.update(col.name, uuid);

    // Add to update queue
    item.addUpdate(row);

    // Notify the change
    context.update();
};

var v1 = function (context) {
    try {
        let uuid = getUUID("1", true);
        setContent(context, uuid);
    } catch (err) {
        context.alert('Error', err);
    }
}

var v4 = function (context) {
    let uuid = getUUID("4", true);
    setContent(context, uuid);
}

var v1nohyphens = function (context) {
    let uuid = getUUID("1", false);
    setContent(context, uuid);
}

var v4nohyphens = function (context) {
    let uuid = getUUID("4", false);
    setContent(context, uuid);
}

global.v1 = v1;
global.v4 = v4;
global.v1nohyphens = v1nohyphens;
global.v4nohyphens = v4nohyphens;