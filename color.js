function color(btn,  print, soundId) {
    
    btn.style.backgroundColor = print;
    let sound= document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

// ترجع كل الأزرار للون الأبيض مثلاً
function reset() {
    const buttons = document.querySelectorAll('.bord button');
    buttons.forEach(btn => {
        btn.style.backgroundColor = ''; // أو "" لو تبغين ترجع للـ CSS الأصلي
    });
}
