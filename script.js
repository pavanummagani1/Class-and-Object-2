class Book{
    title;
    author;
    isbn;
    constructor(bookTitle,bookAuthor,bookIsbn){
        this.title = bookTitle;
        this.author = bookAuthor;
        this.isbn = bookIsbn;
    }
    checkOut(){

    }
    returnBook(){

    }
}
class MembershipType{
    name;
    membershiptype;
    constructor(memberName,memberShipType){
        this.name = memberName;
        this.membershiptype = memberShipType;
    }
    borrowBook(book){
        console.log(`This ${book} is borrowed by ${this.name}`);

    }
    returnBook(book){
        console.log(`This ${book} is returned by ${this.name}`);
    }
}

var book1 = new Book("Javascript", "Oracle", "2373926");
console.log(book1);
var member = new MembershipType("Pavan Kalyan", "Premium");
member.borrowBook(book1.title);
member.returnBook("book2");