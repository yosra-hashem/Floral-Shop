function showPages()
{
    if(document.getElementById("drop-down-pages").classList.contains("display-none") )
    {
        document.getElementById("drop-down-pages").classList.remove("display-none");
        document.getElementById("drop-down-pages").classList.add("display-block");
    }
    else if(document.getElementById("drop-down-pages").classList.contains("display-block"))
        {
            document.getElementById("drop-down-pages").classList.remove("display-block");
            document.getElementById("drop-down-pages").classList.add("display-none");
    }   
}


function create(s)
{

    let d= document.createElement('div') ;
    d.style.backgroundImage = ('url('+ s + ')') ;              
    d.style.backgroundSize = 'cover' ;
    d.style.display = 'inline-block' ;
    d.style.width = '30%' ;
    d.style.height = '200px' ;
    d.style.margin = '10px' ;
    document.getElementById('content').appendChild(d) ;

    

    
}

function onSuccess(response) {
    response.text().then(printText);
}

function printText(text) {
    let linksArray = text.split('\n');
    //console.log(linksArray); 
    for(i=0;i<linksArray.length;i++)
    {
        create(linksArray[i] );
    }
}

function getData()
{
    fetch('https://yosra.yosrahashem.repl.co/pages/Gallery/JS/links.txt') 
    .then(onSuccess)
}