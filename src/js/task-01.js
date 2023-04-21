const itemRef = document.querySelectorAll('.item');

console.log(`Кількість категорій:`, itemRef.length);

itemRef.forEach(element => {
        const titleEl = element.firstElementChild;
        const innerLiEl = element.lastElementChild.children;
        console.log('Категорія:' , titleEl.textContent);
        console.log('Елементів:' , innerLiEl.length);
    });


