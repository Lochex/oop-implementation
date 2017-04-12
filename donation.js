class Donation {
	
	constructor(donorName, address, phone, email, amount, approved) {
		this.donorName = donorName;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.amount = amount;
		this.approved = false;
		this.totalBalance = 0;

		this.recieveDonation = function () {
			this.totalBalance += this.amount;
			return this.totalBalance;

		}

		this.approveDonation = function () {
			this.approved = true;
			return "This donation has been approved";
		}

	}
}


class ItemDonation extends Donation {
	constructor(donorName, address, phone, email, amount, approved, itemName, quantity, price) {
		super(donorName, address, phone, email, amount, approved);
		this.itemName = itemName;
		this.quantity = quantity
		this.price = price;
		this.amount = quantity * price;



		this.disburseDonation = function (amt) {
			this.totalBalance -= amt
			return "A total of "+amt+ " was give out, we have "+this.totalBalance+ " left";
			//console.log("This donation has been disbursed");
		}

	}
}

bambisDonation = new Donation("Bambi","lekki, lagos", "07033839286", "bambi@gmail.com", 20000, false);
console.log(bambisDonation.recieveDonation());
console.log(bambisDonation.recieveDonation());

elosDonation = new ItemDonation("Bambi","lekki, lagos", "07033839286", "bambi@gmail.com", 20000, false, "Ketchup", 20, 500);
console.log(elosDonation.recieveDonation());
console.log(elosDonation.disburseDonation(500));

