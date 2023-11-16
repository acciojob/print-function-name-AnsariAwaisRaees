//your JS code here. If required.
function functionName() {
    alert("functionName");
}

// Calling the function
functionName();

function AccioJob() {
    alert(arguments.callee.name);
}

// Calling the function
AccioJob();