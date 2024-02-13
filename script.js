var materials = {'adamantine': {'cost': 0.45, 'name': '精金'}, 'ancient-stone': {'cost': 0.3, 'name': '远古之石'}, 'avalon-ore': {'cost': 0.85, 'name': '阿瓦隆矿石'}, 'baldur': {'cost': 0.85, 'name': '巴德尔光石'}, 'balorite': {'cost': 0.4, 'name': '巴罗尔灵石'}, 'bone': {'cost': 0.1, 'name': '骨头'}, 'broken-statue': {'cost': 0.35, 'name': '破碎雕像'}, 'cavestone': {'cost': 0.45, 'name': '洞穴石'}, 'cursed-ortanite': {'cost': 1.05, 'name': '诅咒欧坦尼'}, 'darkstone': {'cost': 0.15, 'name': '暗之石'}, 'dayleaf': {'cost': 0.25, 'name': '日之叶'}, 'demonic-ore': {'cost': 0.25, 'name': '恶魔矿石'}, 'draconite': {'cost': 0.25, 'name': '德肯灵石'}, 'dragonite': {'cost': 0.2, 'name': '龙灵石'}, 'earthstone': {'cost': 0.15, 'name': '地之石'}, 'elstone': {'cost': 0.4, 'name': '精灵石'}, 'eyestone': {'cost': 0.55, 'name': '眼石'}, 'firestone': {'cost': 0.15, 'name': '火之石'}, 'fogstone': {'cost': 0.55, 'name': '雾之石'}, 'greater-soul': {'cost': 0.25, 'name': '强大灵魂'}, 'hardened-steel': {'cost': 0.15, 'name': '硬化钢'}, 'hide': {'cost': 0.1, 'name': '兽皮'}, 'iron': {'cost': 0.1, 'name': '铁'}, 'leather': {'cost': 0.1, 'name': '皮革'}, 'lesser-balorite': {'cost': 0.4, 'name': '低阶巴罗尔灵石'}, 'lightningstone': {'cost': 0.15, 'name': '雷之石'}, 'lightstone': {'cost': 0.85, 'name': '光之石'}, 'lyonite': {'cost': 1.05, 'name': '里昂原石'}, 'mandrake': {'cost': 0.1, 'name': '曼德拉草'}, 'mythril': {'cost': 0.1, 'name': '秘银'}, 'nightshade': {'cost': 0.2, 'name': '夜影'},'nightstone': {'cost': 0.65, 'name': '夜之石'}, 'orichalcum': {'cost': 0.8, 'name': '奥利哈钢'}, 'ortanite': {'cost': 1.05, 'name': '欧坦尼'}, 'perfect-baldur': {'cost': 0.85, 'name': '完美巴德尔光石'}, 'perfect-runestone': {'cost': 0.55, 'name': '完美符文石'}, 'platinum': {'cost': 0.1, 'name': '白金'}, 'pure-darkstone': {'cost': 0.8, 'name': '纯净暗之石'}, 'pure-draconite': {'cost': 0.25, 'name': '纯净德肯灵石'}, 'pure-lightstone': {'cost': 0.85, 'name': '纯净光之石'}, 'pure-waterstone': {'cost': 0.6, 'name': '纯净水之石'}, 'realm-ore': {'cost': 0.95, 'name': '域界矿石'}, 'red-draconite': {'cost': 0.65, 'name': '红德肯灵石'}, 'runestone': {'cost': 0.15, 'name': '符文石'}, 'sandstone': {'cost': 0.45, 'name': '沙之石'}, 'scalestone': {'cost': 0.35, 'name': '鳞石'}, 'silk': {'cost': 0.1, 'name': '丝'}, 'silphium': {'cost': 0.25, 'name': '罗盘草'}, 'silver': {'cost': 0.1, 'name': '银'}, 'skystone': {'cost': 0.45, 'name': '飓风石'}, 'solarite': {'cost': 0.4, 'name': '太阳灵石'}, 'soul': {'cost': 0.1, 'name': '灵魂'}, 'steel': {'cost': 0.1, 'name': '钢'}, 'stone': {'cost': 0.1, 'name': '石头'}, 'titanium': {'cost': 0.4, 'name': '泰坦原石'}, 'twilightstone': {'cost': 0.65, 'name': '暮光石'}, 'undead-bone': {'cost': 0.45, 'name': '不死族之骨'}, 'vampiric-ore': {'cost': 0.55, 'name': '吸血鬼矿石'}, 'waterstone': {'cost': 0.15, 'name': '水之石'}, 'witchstone': {'cost': 0.65, 'name': '女巫石'}, 'wolfs-blood': {'cost': 0.35, 'name': '狼之血'}, 'wood': {'cost': 0.1, 'name': '木头'}}
// 自动生成select元素的options
var materialSelect = document.getElementById("material");
for (var material in materials) {
    var option = document.createElement("option");
    option.value = material;
    option.text = materials[material].name + '[' + material + ']';
    materialSelect.appendChild(option);
}
// 计算花费
function calculateCost() {
    var selectedMaterial = document.getElementById("material").value;
    var currentQuantity = document.getElementById("currentQuantity").value;
    var targetQuantity = document.getElementById("targetQuantity").value;

    var cost = Math.ceil((targetQuantity - currentQuantity) * materials[selectedMaterial].cost);
    var costElement = document.getElementById("cost");
    costElement.innerHTML = "<span class='icon_lable'><img src='./img/proof_anguish.png' class='icon'>" + cost + "</span>";
    costElement.innerHTML += "<span class='icon_lable'><img src='./img/tower_fragment.png' class='icon'>" + cost*200 + "</span>";
    costElement.innerHTML += "<span class='icon_lable'><img src='./img/coral.png' class='icon'>" + cost*80 + "</span>";
    costElement.innerHTML += "<span class='icon_lable'><img src='./img/proof_blades1.png' class='icon'>" + cost*4 + "</span>";
}

function create_custom_dropdowns() {
    $('select').each(function (i, select) {
        if (!$(this).next().hasClass('dropdown-select')) {
            $(this).after('<div class="dropdown-select wide ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
            var dropdown = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            dropdown.find('.current').html(selected.data('display-text') || selected.text());
            options.each(function (j, o) {
                var display = $(o).data('display-text') || '';
                dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
            });
        }
    });

    $('.dropdown-select ul').before('<div class="dd-search"><input id="txtSearchValue" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div>');
}

// Event listeners

// Open/close
$(document).on('click', '.dropdown-select', function (event) {
    if($(event.target).hasClass('dd-searchbox')){
        return;
    }
    $('.dropdown-select').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).find('.option').attr('tabindex', 0);
        $(this).find('.selected').focus();
    } else {
        $(this).find('.option').removeAttr('tabindex');
        $(this).focus();
    }
});

// Close when clicking outside
$(document).on('click', function (event) {
    if ($(event.target).closest('.dropdown-select').length === 0) {
        $('.dropdown-select').removeClass('open');
        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});

function filter(){
    var valThis = $('#txtSearchValue').val();
    $('.dropdown-select ul > li').each(function(){
     var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();         
   });
};
// Search

// Option click
$(document).on('click', '.dropdown-select .option', function (event) {
    $(this).closest('.list').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    var text = $(this).data('display-text') || $(this).text();
    $(this).closest('.dropdown-select').find('.current').text(text);
    $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown-select', function (event) {
    var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
    // Space or Enter
    //if (event.keyCode == 32 || event.keyCode == 13) {
    if (event.keyCode == 13) {
        if ($(this).hasClass('open')) {
            focused_option.trigger('click');
        } else {
            $(this).trigger('click');
        }
        return false;
        // Down
    } else if (event.keyCode == 40) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            focused_option.next().focus();
        }
        return false;
        // Up
    } else if (event.keyCode == 38) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
            focused_option.prev().focus();
        }
        return false;
        // Esc
    } else if (event.keyCode == 27) {
        if ($(this).hasClass('open')) {
            $(this).trigger('click');
        }
        return false;
    }
});

$(document).ready(function () {
    create_custom_dropdowns();
});