function User(obj){
    this.name = obj.name;
    this.surname = obj.surname;
    this.age = obj.age;
    this.birthday = obj.birthday.dmy || obj.birthday;
    this.region = obj.region;
    this.phone = obj.phone;
}
User.prototype.update = function(name, surname, age, birthday, region, phone){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthday = birthday;
    this.region = region;
    this.phone = phone;
}