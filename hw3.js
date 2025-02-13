"use strict"; //嚴格定義，有些含糊語法不會過

document.write('<div align="center">')
for (let i=1; i<=6; i++) {
    if (i==4)
        document.write("<br/>");
    //卡片3*2 的 換行

    document.write('<table border="1">'); //邊界
    document.write('<tr><td align="center" colspan = "8">第 '+ i.toString() +' 張卡片'
    +'<input type="checkbox" name="mycheckbox"/>'
    +'</td></tr>'); //String(i) 也可
    for (let j=1, tmp=2**(i-1); j<=4; j++){
        document.write('<tr>');
        for (let k=1, num; k<=8; k++){
            num = (j-1)*8+k-1;
            num = num*2-num%tmp+tmp; //二進位的拆分
            //第i個 就讓第i位數是"1"
            document.write('<td>' + String(num));
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}
document.write('</div>')


function Ans(){
	var answer = 0;
	var checkOnce = false;
	var checkBoxs = document.getElementsByName("mycheckbox"); //get element
	for(let i=0;i<6;i++){
		if(checkBoxs[i].checked){
			checkOnce = true; //偵測有沒有選卡片
			answer = (i==0)? (answer|1):(answer|(2**i)); 
		}
	}
	if(!checkOnce)
		alert("請至少勾選一張卡片！！");
	else{
		var tables = document.getElementsByTagName("table");
		for(let i=0;i<6;i++){
			for(let j=1;j<=4;j++){
				var tr = tables[i].getElementsByTagName("tr")[j];
				for(let k=0;k<8;k++){
					var td = tr.getElementsByTagName("td")[k];
                    td.style.background = (parseInt(td.innerHTML)==answer)? "#FFFFFF" : "";
				}
			}
		}
    }
}
