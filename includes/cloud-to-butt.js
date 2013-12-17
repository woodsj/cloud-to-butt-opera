(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E

        var child, next;

        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                handleText(node);
                break;
        }
    }

    function handleText(textNode) 
    {
        var v = textNode.nodeValue;

        v = v.replace(/\bThe Cloud\b/g, "My Butt");
        v = v.replace(/\bThe cloud\b/g, "My butt");
        v = v.replace(/\bthe Cloud\b/g, "my Butt");
        v = v.replace(/\bthe cloud\b/g, "my butt");
        
        /* These are mostly from xkcd #1288. Mostly. */
        
        v = v.replace(/\bWitnesses/g, "These dudes I know");
        v = v.replace(/\bwitnesses/g, "these dudes I know");
        v = v.replace(/\bAllegedly\b/g, "Kinda probably");
        v = v.replace(/\ballegedly\b/g, "kinda probably");
        v = v.replace(/\bnew study\b/g, "tumblr post");
        v = v.replace(/\bNew Study\b/g, "Tumblr Post");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bSpace\b/g, "Spaaaaaaaace");
        v = v.replace(/\bspace\b/g, "spaaaaaaaace");
        v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
        v = v.replace(/\bSmartphone\b/g, "Pokedex");
        v = v.replace(/\bsmartphone\b/g, "Pokedex");
        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\belectric\b/g, "atomic");
        v = v.replace(/\bSenator/g, "Elf-Lord");
        v = v.replace(/\bsenator/g, "elf-lord");
        v = v.replace(/\bCat\b/g, "Dinosaur");
        v = v.replace(/\bcat\b/g, "dinosaur");
        v = v.replace(/\bElection/g, "Eating Contest");
        v = v.replace(/\belection/g, "eating contest");
        v = v.replace(/\bcould not be reached for comment/g, "is guilty and everyone knows it");
        v = v.replace(/\bTSA Agent/g, "Scrote Grabber");
        v = v.replace(/\bTSA agent/g, "scrote grabber");
        v = v.replace(/\bSocial justice\b/g, "Circlejerk");
        v = v.replace(/\bsocial justice\b/g, "circlejerk");
        v = v.replace(/\bKeith Alexander/g, "Zod");
        v = v.replace(/\Gen. Alexander/g, "Gen. Zod");
        v = v.replace(/\General Alexander/g, "General Zod");
        v = v.replace(/\bNSA/g, "Scooby-Doo Detective Agency");
        v = v.replace(/\bN.S.A./g, "Scooby-Doo Detective Agency");
        v = v.replace(/\bNational Security Agency/g, "Scooby-Doo Detective Agency");

        textNode.nodeValue = v;
    }

    window.addEventListener('DOMContentLoaded', function() {
        walk(document.body);
    }, false);

}());
