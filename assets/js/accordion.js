// SiiD W6 homework accordionUI

// 即時関数の定義
(() => {

    class Accordion{
        // 初期化
        constructor(obj){

            console.log('obj', obj.hookName);

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const triggerLen = $trigger.length;
            
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e))
                index ++;
            }
        
        }

        // クリックしたら実行
        clickHandler(e){
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        }
    }
    
    const fuckingAccordion = new Accordion({
        hookName: '#js-tab0',
        tagName: 'p'
    });

    const dummyAccordion = new Accordion({
        hookName: '#js-tab1',
        tagName: 'p'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-tab2',
        tagName: 'p'
    });

    const miniAccordion2 = new Accordion({
        hookName: '#js-tab3',
        tagName: 'p'
    });


})();