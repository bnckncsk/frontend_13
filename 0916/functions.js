function $(id) {        // document.getElementById helyettesito
    return document.getElementById(id);
}

function rangeRGB() {
    const r = $('red-range').value;
    const g = $('green-range').value;
    const b = $('blue-range').value;
    const a = $('alpha-range').value

    $('red-value').value = r;
    $('green-value').value = g;
    $('blue-value').value = b;
    $('alpha-value').value = a;

    $('rgb-box').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function typeRGB() {
    const rBoxValue = $('red-value').value;
    const gBoxValue = $('green-value').value;
    const bBoxValue = $('blue-value').value;
    const aBoxValue = $('alpha-value').value;

    $('red-range').value = rBoxValue;
    $('green-range').value = gBoxValue;
    $('blue-range').value = bBoxValue;
    $('alpha-range').value = aBoxValue;

    document.getElementById('rgb-box').style.backgroundColor = `rgba(${rBoxValue}, ${gBoxValue}, ${bBoxValue}, ${aBoxValue})`;
}

function divTweaker() {
    const w = $('width-range').value;
    const h = $('height-range').value;
    const r = $('radius-range').value;
    const mL = $('marginl-range').value;
    const mT = $('margint-range').value;

    $('rgb-box').style.width = `${w}px`;
    $('rgb-box').style.height = `${h}px`;
    $('rgb-box').style.borderRadius = `${r}px`;
    $('rgb-box').style.marginLeft = `${mL}px`;
    $('rgb-box').style.marginTop = `${mT}px`;
}




$('red-range').addEventListener("input", rangeRGB);
$('green-range').addEventListener("input", rangeRGB);
$('blue-range').addEventListener("input", rangeRGB);
$('alpha-range').addEventListener("input", rangeRGB);

$('red-value').addEventListener("input", typeRGB);
$('green-value').addEventListener("input", typeRGB);
$('blue-value').addEventListener("input", typeRGB);
$('alpha-value').addEventListener("input", typeRGB);

$('width-range').addEventListener("input", divTweaker);
$('height-range').addEventListener("input", divTweaker);
$('radius-range').addEventListener("input", divTweaker);
$('marginl-range').addEventListener("input", divTweaker);
$('margint-range').addEventListener("input", divTweaker);