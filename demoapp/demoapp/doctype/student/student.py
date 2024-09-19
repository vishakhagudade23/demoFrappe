# Copyright (c) 2024, Vishakha and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Student(Document):
	def before_save(self):
		self.full_name = f"{self.name1} {self.last_name}"



	# def send_alert(self):
	# 	print("sending message")





# Save API Secret: 08e9c35f31867eb