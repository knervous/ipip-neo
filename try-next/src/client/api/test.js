import http from 'api/http'

export async function addTestResult(){
    let res = await http('post', '/test_result')
    if (res != null){
        alert('success')
    }
}