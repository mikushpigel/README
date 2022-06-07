console.log('hello world');
 const user = {
            firstName: 'yoram',
            lastName: 'Pretz',
            age: 45,
            fullName: function () {
                return `${this.firstName} ${this.lastName}`;
            }
        }
         const user2 = {
            firstName: 'rotem',
            lastName: 'shpigel',
            age: 25,
            fullName: function () {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        //קונסקרטור פנקשן- שם הפונקציה תמיד יתחיל באות גדולה
        function Person(fname, lname, age) {
            this.firstName = fname;
            this.lastName = lname;
            this.age = age;
        }
        Person.prototype.greet = function () {
            return `Hello ${this.firstName} ${this.lastName} ${this.age} welcome to our site!`;
        }

        let avi = new Person('avi', 'Peretz', 52);
        let sima = new Person('sima', 'hadad', 60);
