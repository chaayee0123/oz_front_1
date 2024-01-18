//제너릭클래스 큐방식
//FIFO
class GenericQueue<T> {
    private items: T[] = [];

    //인큐 메서드(큐를 데이터에 추가)
    enqueue(item: T): void {
        this.items.push(item);
    }
    //디큐 메서드(큐 꺼내기)
    dequeue(): T | undefined {
        return this.items.shift();
    }
    //peak메서드(큐의 맨 처음 데이터 확인)
    peek(): T | undefined {
        return this.items[0];
    }
    //size메서드(현재 큐 사이즈 바ㅓㄴ환)
    size():number {
        return this.items.length;
    }
}


const stringQ = new GenericQueue<string>();
stringQ.enqueue("Hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue("Typescript");
console.log(stringQ.size());
console.log(stringQ.peek());
