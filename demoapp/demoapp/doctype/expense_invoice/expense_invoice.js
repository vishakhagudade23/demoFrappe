// Copyright (c) 2024, Vishakha and contributors
// For license information, please see license.txt

frappe.ui.form.on("Expense Invoice", {
	refresh(frm) {

	},

    update_total_amount(frm) {
        let total_amt = 0;
        for(let item of frm.doc.items) {
            total_amt += (item.quantity * item.price);
        }

        frm.set_value("total_amount", total_amt);
        const discount = (total_amt % 100)*10;
        frm.set_value("payable_amount", discount);
    }
});

frappe.ui.form.on('Invoice Item', {
	refresh(frm) {
		// your code here
	},
    product(frm, cdt, cdn){
        frm.trigger("update_total_amount");
    },
    items_remove(frm) {
        frm.trigger("update_total_amount");
    }
})
