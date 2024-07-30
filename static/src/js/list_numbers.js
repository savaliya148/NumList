/** @odoo-module **/

import {ListRenderer} from "@web/views/list/list_renderer";
import {patch} from "@web/core/utils/patch";

patch(ListRenderer.prototype, {
    freezeColumnWidths() {
        const table = this.tableRef.el;
        const tablee = table.firstElementChild.firstElementChild;
        if (!$(tablee.firstChild).hasClass("count_row")) {
            const a = $(tablee).prepend(
                '<th class="count_row" style="width: 4% !important;">'
            );
            a.find("th.count_row").html("No");
        }
        return super.freezeColumnWidths();
    },
});
