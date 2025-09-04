const mongooose  = require("mongoose");

mongooose.connect("mongodb+srv://kishanrachh1118_db_user:KishanRachh1118@mca.ukmpwsi.mongodb.net/?retryWrites=true&w=majority&appName=MCA",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const studentSchema = new mongooose.Schema({
    name:String,
    department:String,
    startyear:Number,
    endyear:Number,
    enrollment:Number,
    address:String,
});

const Student = mongooose.model("Student",studentSchema);
console.log("Mongodb connected successfully");

    Student.find()
        .then((students) => {
            console.log("Students found successfully   :", students);
        })
        .catch((error) => {
            console.error("Error finding students:", error);
        });

    Student.find({ department: "Computer Science" })
        .then((students) => {
            console.log("Students found successfully   :", students);
        })
        .catch((error) => {
            console.error("Error finding students:", error);
        });

        const student = new Student({
            name: "ravi patel",
            department: "Master of Computer Application",
            startyear: 2024,
            endyear: 2026,
            enrollment: 240823068,
            address: "Rajkot",
        });
       

// const student = new Student({
//     name: "Kishan Rachh",
//     department: "Computer Science",
//     startyear: 2020,
//     endyear: 2024,
//     enrollment: 123456,
//     address: "Rajkot"
// });

student.save()
    .then(() => {
        console.log("Student saved successfully");
    })
    .catch((error) => {
        console.error("Error saving student:", error);
    });
