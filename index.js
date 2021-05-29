const buttonNames = ['vanilla', 'modded', 'settings']
buttonNames.forEach(buttonName => {
    document.getElementById(buttonName + 'Button').addEventListener("mouseover", function() {
        document.getElementById(buttonName + 'Tooltip').style.opacity = "1"
        document.getElementById(buttonName + 'Tooltip').style.transform = "scale(1)"
    });
    
    document.getElementById(buttonName + 'Button').addEventListener("mouseout", function() {
        document.getElementById(buttonName + 'Tooltip').style.opacity = "0"
        document.getElementById(buttonName + 'Tooltip').style.transform = "scale(1.05)"
    });
});

