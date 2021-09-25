package algorithms;

import java.util.Scanner;

//입력한 값에서 제일 긴 단어 찾기 


 class String3 {
	public String solution(String str) {
		String answer="";
		int m=Integer.MIN_VALUE,pos;
		
		while((pos=str.indexOf(' '))!=-1) {
			String tmp = str.substring(0, pos);
			int len=tmp.length();
			if(len>m) {
				m=len;
				answer=tmp;
			}
			str=str.substring(pos+1);
		}
		if(str.length()>m) answer=str;
		
		
		/*String[] s = str.split("\\s");
		for(String x : s) {
			int len = x.length();
			if(len>m) {
				m=len;
				answer=x;
			}
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
