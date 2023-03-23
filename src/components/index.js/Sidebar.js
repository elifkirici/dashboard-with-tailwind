

function Sidebar() {

  return (

    <div class="sidebarmenu fixed h-full bg-nav-white drop-shadow-3xl z-0 w-[75px] flex justify-center">
      <ul className="p-10 text-lg">
        <li><a href="/" className="pb-5 text-gray block"><i className="bi bi-columns"></i></a></li>
        <li><a href="/" className="pb-5 text-gray block"><i className="bi bi-file-bar-graph"></i></a></li>
        <li><a href="/" className="pb-5 text-gray block"><i className="bi bi-bell"></i></a></li>
        <li><a href="/" className="pb-5 text-gray block"><i className="bi bi-graph-up-arrow"></i></a></li>
        <li><a href="/" className="pb-5 text-gray block"><i className="bi bi-gear"></i></a></li>
        <li><a href="/" className="pb-5 text-gray block"><i className="bi bi-box-arrow-right"></i></a></li>
      </ul>

    </div>
  )
}

export default Sidebar
