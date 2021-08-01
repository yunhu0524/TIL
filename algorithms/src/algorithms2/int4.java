package algorithms2;

import java.util.Scanner;
//�Ǻ���ġ ����
class int4 {
	public int[] solution(int n) {
		int[] answer = new int[n];
		answer[0]=1;
		answer[1]=1;
		for(int i=2; i<n; i++) {
			answer[i] = answer[i-2]+answer[i-1];
		}
		return answer;
	}

	public static void main(String[] args) {
		int4 T = new int4();
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		for(int x:T.solution(n)) {
			System.out.println(x+" ");
		}
		
	}

}
