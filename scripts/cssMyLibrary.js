$(function () {
    if ($('[class*="width"]').length) {
        let elementsClassName = "width";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="height"]').length) {
        let elementsClassName = "height";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="min-height"]').length) {
        let elementsClassName = "min-height";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="font-size"]').length) {
        let elementsClassName = "font-size";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="font-family"]').length) {
        let elementsClassName = "font-family";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="font-weight"]').length) {
        let elementsClassName = "font-weight";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="text-align"]').length) {
        let elementsClassName = "text-align";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="gap"]').length) {
        let elementsClassName = "gap";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="margin"]').length) {
        let elementsClassName = "margin";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="margin-right"]').length) {
        let elementsClassName = "margin-right";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="margin-left"]').length) {
        let elementsClassName = "margin-left";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="margin-top"]').length) {
        let elementsClassName = "margin-top";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="margin-bottom"]').length) {
        let elementsClassName = "margin-bottom";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="padding"]').length) {
        let elementsClassName = "padding";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="padding-right"]').length) {
        let elementsClassName = "padding-right";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="padding-left"]').length) {
        let elementsClassName = "padding-left";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="padding-top"]').length) {
        let elementsClassName = "padding-top";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="padding-bottom"]').length) {
        let elementsClassName = "padding-bottom";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="border-radius"]').length) {
        let elementsClassName = "border-radius";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="top"]').length) {
        let elementsClassName = "top";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="right"]').length) {
        let elementsClassName = "right";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="bottom"]').length) {
        let elementsClassName = "bottom";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="left"]').length) {
        let elementsClassName = "left";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="rotate"]').length) {
        let elementsClassName = "rotate";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="list-style-type"]').length) {
        let elementsClassName = "list-style-type";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

    if ($('[class*="cursor"]').length) {
        let elementsClassName = "cursor";
        let elements = $(`[class*=${elementsClassName}]`);
        $.each(elements, function () {
            let classNames = $(this).attr('class').split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].startsWith(elementsClassName)) {
                    let elementClassValue = classNames[i].substring(elementsClassName.length + 1);
                    // console.log('Element:', this, 'value Class:', elementClassValue);
                    $(this).css(elementsClassName, elementClassValue);
                }
            }
        });
    } else {
    }

})