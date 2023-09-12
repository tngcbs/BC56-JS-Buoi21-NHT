function Employee(username, fullname, email, password, startDate, baseSalary, position, workingHours) {
    this.username = username;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.startDate = startDate;
    this.baseSalary = baseSalary;
    this.position = position;
    this.workingHours = workingHours;

    this.calcSalary = function () {
        var salary = 0;
        var position = ["Nhân Viên", "Trưởng Phòng", "Giám Đốc"];
        var positionRate = ["1", "2", "3"];
        switch (this.position) {
            case position[2]:
                salary = this.baseSalary * positionRate[2];
                break;
            case position[1]:
                salary = this.baseSalary * positionRate[1];
                break;
            case position[0]:
                salary = this.baseSalary * positionRate[0];
                break;
        }
        return salary;
    };
}