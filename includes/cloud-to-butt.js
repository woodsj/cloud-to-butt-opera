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
        
        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
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
        v = v.replace(/\bSenator\b/g, "Elf-Lord");
        v = v.replace(/\bsenator\b/g, "elf-lord");
        v = v.replace(/\bCat\b/g, "Dinosaur");
        v = v.replace(/\bcat\b/g, "dinosaur");
        v = v.replace(/\bElection\b/g, "Eating Contest");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
        v = v.replace(/\bTSA Agent\b/g, "Scrotum Fondler");
        v = v.replace(/\bTSA agent\b/g, "scrotum fondler");
        v = v.replace(/\bSocial justice blogger\b/g, "Pompous Ass");
        v = v.replace(/\bsocial justice blogger\b/g, "pompous ass");
        v = v.replace(/\bKeith Alexander\b/g, "Zod");
        v = v.replace(/\bNSA\b/g, "Scooby-Doo");

        textNode.nodeValue = v;
    }

    window.addEventListener('DOMContentLoaded', function() {
        walk(document.body);
    }, false);

}());
