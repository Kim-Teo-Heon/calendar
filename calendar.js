const date = document.querySelector('#date-input');
const calendar = document.querySelector('.calendar__date');

const now = new Date();
const year_now = now.getFullYear();
const month_now = get_month_now(now);
const date_now = now.getDate();

function gen_firstdate(year, month) {
    let month_ = month - 1;
    let firstdate = new Date(year, month_, 1);
    let first_day = firstdate.getDay();
    // 월 = 1 화 = 2 ...
    
    return first_day
}

function blank(day){
    var blank="<tr>";
    for(var i=0; i<day; i++){
        blank+="<td></td>";
    }

    return blank;
}

function select_days(month){
    switch(month){
        case 01: case 03: case 05: case 07: case 08: case 10: case 12:
            return 31;

        case 04: case 06: case 09: case 11: 
            return 30;

        case 02:
            return 29;
    }
}


function gen_calander() {
    let date_array = date.value.split('-');
    let year = date_array[0];
    let month = parseInt(date_array[1]);
    let first_day = gen_firstdate(year, month);
    let days = select_days(month);

    print_calendar(first_day, days);
    
    if(month==month_now && year==year_now) {
        print_today()
    }
}

function print_calendar (first_day, days) {
    let result = blank(first_day);   

    for(var i=1;i<=days;i++){
        if(i==days){
            result+=`<td id = "${i}">${i}</td></tr>`;
            "<td>"+i+"</td>"+"</tr>";
        }else if((i+first_day)%7==0){
            result+=`<td id = "${i}">${i}</td></tr>`;
        } else{
            result+=`<td id = "${i}">${i}</td>`
        }
    }

    calendar.innerHTML = result;
}

function get_month_now(now) {
    let month_now = now.getMonth() + 1;
    month_now = month_now<10 ? `0${month_now}` : `${month_now}`
    return month_now
}

function print_today() {
    const today = document.getElementById(`${date_now}`)
    // querySelector는 숫자로 시작하는 id를 선택 X
    today.classList.add('today');
}

function init() {
    const year_month_now = `${year_now}-${month_now}`
    date.value = year_month_now;

    gen_calander();

    date.addEventListener('change', gen_calander);

}

init();