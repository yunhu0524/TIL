package algorithms2;

import java.util.ArrayList;
import java.util.Scanner;

//단어 뒤집기 
class String4 {
	public ArrayList<String> solution(int n, String[] str){
		ArrayList<String>answer = new ArrayList<>();
		for(String x :str) {
			char[] s = x.toCharArray();//문자 배열
			int lt =0, rt=x.length()-1;
			while(lt<rt) {
				char tmp = s[lt];
				s[lt]=s[rt];
				s[rt]=tmp;
				lt++;
				rt--;
			}
			String tmp = String.valueOf(s);
			//스트링으로 바꿔준다
			answer.add(tmp);
		}
		
		/*for(String x : str) {
			String tmp= new StringBuilder(x).reverse().toString();
			answer.add(tmp);
		}*/
		return answer;
	}

	public static void main(String[] args) {
		String4 T = new String4();
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		String [] str = new String[n];
		for(int i=0; i<n; i++) {
			str[i] = sc.next();
		}
		for(String x : T.solution(n,str)) {
			System.out.println(x);
		}
	}

}
