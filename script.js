class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }

    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.notify(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
      this.phoneNumbers = this.phoneNumbers.filter(num => num !== phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Phone number not found.");
      }
    }
  }

  class PhoneObserver {
    notify(phoneNumber) {
      console.log("Phone number dialed:", phoneNumber);
    }
  }
  
  class DialingObserver {
    notify(phoneNumber) {
      console.log("Now Dialling", phoneNumber);
    }
  }
  
  const telephone = new Telephone();
  
  const phoneObserver = new PhoneObserver();
  const dialingObserver = new DialingObserver();
  
  telephone.addObserver(phoneObserver);
  telephone.addObserver(dialingObserver);
  
  document.getElementById("addBtn").addEventListener("click", () => {
    const phoneNumber = prompt("Enter phone number to add:");
    if (phoneNumber) {
      telephone.addPhoneNumber(phoneNumber);
    }
  });
  
  document.getElementById("removeBtn").addEventListener("click", () => {
    const phoneNumber = prompt("Enter phone number to remove:");
    if (phoneNumber) {
      telephone.removePhoneNumber(phoneNumber);
    }
  });
  
  document.getElementById("dialBtn").addEventListener("click", () => {
    const phoneNumber = prompt("Enter phone number to dial:");
    if (phoneNumber) {
      telephone.dialPhoneNumber(phoneNumber);
    }
  });
  