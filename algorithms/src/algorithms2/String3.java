package algorithms2;

import java.util.Scanner;

class String3 {
	public String solution(String str) {
		String answer="";
		int m = Integer.MIN_VALUE,pos;
		
		while((pos=str.indexOf(' '))!=-1) { 
			//indexOf() 뛰어쓰기 위치를 알려준다 
			//발견을 못하면 -1
			//pos = 뛰어쓰기 전까지에 index 번호
			String tmp = str.substring(0, pos);
			int len = tmp.length();
			if(len>m) {
				m=len;
				answer=tmp;
			}
			str=str.substring(pos+1);
			
		}
		if(str.length()>m) answer=str;
		//마지막 단어는 while 문 안에 들어가지 않는다
		//마지막 단어에 길이가 m 보다 크면~
		
		/*String[] s = str.split(" ");
		for(String x : s) {
			int len = x.length();
			if(len>m) {
				m=len;
				answer=x;
			}*/
		
		return answer;
	}

	public static void main(String[] args) {
		String3 T = new String3();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.nextLine();
		System.out.println(T.solution(str));
	}

}
