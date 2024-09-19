# Copyright (c) 2024, Vishakha and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ExpenseInvoice(Document):
	# pass
	def validate(self):
		total = 0
		for item in self.items:
			total += item.quantity * item.price

		self.total_amount = total
		self.payable_amount = (total) - ((total / 100)*10)