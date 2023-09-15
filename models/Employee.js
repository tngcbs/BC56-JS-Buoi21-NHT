function Employee(account, fullname, email, password, startDate, baseSalary, position, workingHours) {
    this.account = account;
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

    this.rating = function () {
        var ratingList = ["Nhân viên trung bình", "Nhân viên khá", "Nhân viên giỏi", "Nhân viên xuất sắc"];
        var workingHourLevel = [160, 176, 192];
        var ratingResult = "";
        if (this.workingHours < workingHourLevel[0]) {
            ratingResult = ratingList[0];
        } else if (this.workingHours >= workingHourLevel[0] && this.workingHours < workingHourLevel[1]) {
            ratingResult = ratingList[1];
        } else if (this.workingHours >= workingHourLevel[1] && this.workingHours < workingHourLevel[2]) {
            ratingResult = ratingList[2];
        } else if (this.workingHours >= workingHourLevel[2]) {
            ratingResult = ratingList[3];
        }
        return ratingResult;
    }
}