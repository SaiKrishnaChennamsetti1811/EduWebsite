const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const form=document.getElementById("form")

const uname=document.getElementById("uname")

const email=document.getElementById("email")

const password=document.getElementById("password")

const cpassword=document.getElementById("cpassword")

form.addEventListener('submit',(e)=>{
	e.preventDefault()
	validate()
})

function validate(){
	let nameval=uname.value.trim()
	let emailval=email.value.trim()
	let passval=password.value.trim()
	let cpassval=cpassword.value.trim()

	if(nameval===''){
		setError(uname,'User Name Should Not Be Empty')
	}
	else if(nameval.length<4)
	{
		setError(uname,'User name should be minimum 4 characters')
	}
	else{
		setSuccess(uname)
	}

	if(emailval===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailval)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccess(email)
    }

	if(passval===''){
        setError(password,'password cannot be empty')
    }
    else if(!passCheck(passval)){
        setError(password,'password Not Valid')
    }
    else{        
        setSuccess(password)
    }

	if(cpassval===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpassval!=passval){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccess(cpassword)
    }

}

function setError(input,message){
	let parent=input.parentElement;
	let small=parent.querySelector('small')
	small.innerText=message;
	parent.classList.add('error')
	parent.classList.remove('success')
}

function setSuccess(input){
	let parent=input.parentElement;
	parent.classList.add('success')
	parent.classList.remove('error')
}

function emailCheck(input){
	let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	let valid = emailReg.test(input)       
	return valid
}


function passCheck(input){
	let passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	let valid = passReg.test(input)       
	return valid
}