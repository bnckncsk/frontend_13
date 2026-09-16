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

    document.getElementById('rgb-box').style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
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


$('red-range').addEventListener("input", rangeRGB);
$('green-range').addEventListener("input", rangeRGB);
$('blue-range').addEventListener("input", rangeRGB);
$('alpha-range').addEventListener("input", rangeRGB);

$('red-value').addEventListener("input", typeRGB);
$('green-value').addEventListener("input", typeRGB);
$('blue-value').addEventListener("input", typeRGB);
$('alpha-value').addEventListener("input", typeRGB);