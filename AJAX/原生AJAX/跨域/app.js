const data = {
    test: '用来测验的数据'
}

function handle(data) {
    //得到数据进行处理，显示在#result内
    let result = document.querySelector('#result')
    result.innerHTML = data.test
}

handle(data)