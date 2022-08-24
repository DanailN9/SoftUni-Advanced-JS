class Company {
    constructor() {
        this.departmetns = {}
    }

    addEmployee() {
        let arr = [...arguments];
    
        for (const e of arr) {
            console.log(e)
            if (!e) {
                throw ('Invalid input')
            } else if (arr[1] < 0) {
                throw ('Invalid input')
            }
        }

        
    }

    
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
//console.log(c.bestDepartment());
console.log(c.departmetns)