const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')
targets.forEach(target => {
    target.addEventListener('click', () => {
        content.forEach(c => {
            c.classList.remove('active')
        })
        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')
    })
})

function toggleExpand(element) {
    // Cierra cualquier cuadro expandido
    const expandedBox = document.querySelector('.content-box.expand');
    if (expandedBox && expandedBox !== element) {
        expandedBox.classList.remove('expand');
    }

    // Alterna la clase expand en el cuadro actual
    element.classList.toggle('expand');
}