const demo1=document.getElementById("demo1");
const modal=document.getElementById("modal");
const demo2=document.getElementById("demo2");


demo1.addEventListener("click", () =>{
    modal.style.display="block";
});
demo2.addEventListener("click", () =>{
    modal.style.display="none";
});



const modal2=document.getElementById("modal2");
const closes=document.getElementById("close");
const md2=document.getElementById("md2");
md2.addEventListener("click",()=>{
    modal2.style.display="block";
});


closes.addEventListener("click",()=>{
    modal2.style.display="none";
});

function total(baseSalary,productSalary,productQuantity) {
    let salary=baseSalary+(productSalary*productQuantity);
    if(productQuantity<50){
        salary*=0.9;

    }else if(productQuantity>50){
        const extraproduct=productQuantity-50;
        const bonus=extraproduct*productSalary*0.1;
        salary +=bonus;
    }
    return salary 
 
}

function abc() {
    const employees_ID=document.getElementById("id").value;
    const employees_fullname=document.getElementById("FullName").value;
    const employees_baseSalary=document.getElementById("baseSalary").value;
    const employees_productSalary=document.getElementById("productSalary").value;
    const employees_productQuantity=document.getElementById("productQuantity").value;
    if (employees_ID===""||
    employees_fullname===""||
    employees_baseSalary===""||
    employees_productSalary===""||
    employees_productQuantity===""
    ) {
        alert("vui lòng điền đẩy đủ thông tin")
        
    }else{
       document.getElementById("id").value="";
       document.getElementById("FullName").value="";
       document.getElementById("baseSalary").value="";
       document.getElementById("productSalary").value="";
       document.getElementById("productQuantity").value="";
       alert("thêm thành viên mới thành")
    }
};


    const CloseStaffList = document.getElementById("close-staff_list");
    const ShowStaffList = document.getElementById("table-form_list");
  
    const ReViews = document.getElementById("ReView");
    
  
    ReViews.addEventListener("click", () => {
      ShowStaffList.style.display = "block";
    });
    CloseStaffList.addEventListener("click", () => {
      ShowStaffList.style.display = "none";
    });
  
    
    const OutputStaff = document.getElementById("Output-staff");
  
  const ShowForm = document.getElementById("Show-staff_form");

  OutputStaff.addEventListener("click", () => {
    ShowStaffList.style.display = "block";
  });
  OutputStaff.addEventListener("click", () => {
    ShowForm.style.display = "none";
  });

  



