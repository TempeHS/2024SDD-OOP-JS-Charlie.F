class Students {
    constructor(name, major, grade) {
        this.name = name;
        this.major = major;
        this.grade = grade;
    }
    addGrade(result) {
        this.grade.push(result)
    }

    calcGPA() {
        let total = 0;
        for (let i = 0; i<this.grade.length; i++) {
            total += this.grade[i]
        }
        return(total / this.grade.length)
    }
}

const Chris = new Students("Chris", "Software Engineering", [95, 75, 83]);
console.log(Chris);
console.log(Chris.calcGPA())