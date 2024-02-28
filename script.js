function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function clearDisplay()
{
    document.getElementById("screen").value=""
}

function equalclick()
{
    var j=document.getElementById("screen").value
    switch (a)
    {
        case a=10:
            var plusresult=+plus+ +j
            document.getElementById("screen").value=plusresult
            break
        
        case a=20:
            var minusresult=minus-=j
            document.getElementById("screen").value=minusresult
            break

        case a=30:
            var mulresult=mul*=j
            document.getElementById("screen").value=mulresult
            break
        
        case a=40:
            var divresult=div/=j
            document.getElementById("screen").value=divresult
            break
    }
}

let a

function plusclick()
{
    a=10
    plus=document.getElementById("screen").value
    document.getElementById("screen").value=""
}

function minusclick()
{
    a=20
    minus=document.getElementById("screen").value
    document.getElementById("screen").value=""
}

function mulclick()
{
    a=30
    mul=document.getElementById("screen").value
    document.getElementById("screen").value=""
}

function divclick()
{
    a=40
    div=document.getElementById("screen").value
    document.getElementById("screen").value=""
}