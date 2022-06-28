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