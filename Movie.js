/*
현실의 영화 1편을 표현하는 '영화' 클래스 정의
*/
class Movie{
	/*
	변수 : 상태 (  데이터 ) 
	함수 : 나의 데이터를 제어하는 로직 코드
	*/
	constructor(container,width,height,data){
		this.container=container;
		this.width=width;
		this.height=height;
		this.url=data.url;
		this.category_name=data.category_name;
		this.release_year=data.release_year;
		this.running_time=data.running_time;
		this.budget=data.budget;
		this.gross=data.gross;

		this.img=document.createElement("img");
		this.img.src=this.url;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.container.appendChild(this.img);
	}
}





