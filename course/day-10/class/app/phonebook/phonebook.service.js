angular
  .module('phonebook')
  .service('phonebookService', function() {

    this.contacts = [{
        firstName: 'ilija',
        lastName: 'tesic',
        birthday: new Date('03/06/1989'),
        city: 'Istocno Sarajevo',
        phone: '066 123 456',
        email: 'ilija@klika.ba',
        skype: 'itesic.me',
        gender: 'm',
        favorite: false,
        groups: ['family', 'friends', 'work', 'faculty']
    }, {
        firstName: 'MicO',
        lastName: 'micic',
        birthday: new Date('05/08/1992'),
        city: 'Bijeljina',
        phone: '066 897 435',
        email: 'mico@klika.ba',
        skype: 'mico.micic',
        gender: 'm',
        favorite: false,
        groups: [ 'work', 'faculty', 'nobody']
    }, {
        firstName: 'janKo',
        lastName: 'Jankovic',
        birthday: new Date('12/10/1994'),
        city: 'Bugojno',
        phone: '065 456 324',
        email: 'marko@klika.ba',
        skype: 'marko.markovic',
        gender: 'm',
        favorite: false,
        groups: ['family', 'friends', 'work']
    }, {
        firstName: 'milica',
        lastName: 'milic',
        birthday: new Date('12/10/1994'),
        city: 'Bugojno',
        phone: '065 456 324',
        email: 'marko@klika.ba',
        skype: 'marko.markovic',
        gender: 'z',
        favorite: false,
        groups: ['family', 'friends', 'faculty', 'nobody']
    }];

    this.removeContact = function(contact) {
      var i = this.contacts.indexOf(contact);
      this.contacts.splice(i, 1);
    }

    this.addContact = function(contact) {
      this.contacts.push(angular.copy(contact));
    }

  });
