function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student('Маргарита', 'женский', 19);
let student2 = new Student('Светлана', 'женский', 20);
let student3 = new Student('Матвей', 'мужской', 18);
let student4 = new Student('Елизавета', 'женский', 21);
let student5 = new Student('Михаил', 'мужской', 19);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty(`marks`) === true) {
        this.marks.push(...marks);
      } 
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty(`marks`) === false || this.marks.length === 0) {
        return 0;
    }
    let sumMarks = 0;
    this.marks.forEach(item => sumMarks += item);
    return sumMarks / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason; 
  
}
