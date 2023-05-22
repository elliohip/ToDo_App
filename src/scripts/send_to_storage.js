export default function send_to_storage(data_name, object) {

    localStorage.setItem(data_name, JSON.stringify(object))
}