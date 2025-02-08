import React from 'react'; // Import React for JSX syntax and component rendering
import MovieCard from '../components/MovieCard';

export default function Movies() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/files/ItemP2658_jpg_480x.progressive.jpg?v=1692302023"
        title="The Lord of the Rings: The Fellowship of the Ring"
        genre="Adventure, Drama, Fantasy"
        rating="8.9"
        description="A young hobbit, Frodo, embarks on a dangerous quest to destroy a powerful ring that could doom the world, forming an alliance with warriors, wizards, and elves along the way."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_480x.progressive.jpg?v=1573613877"
        title="Star Wars: Episode IV - A New Hope"
        genre="Action, Adventure, Fantasy"
        rating="8.6"
        description="A young farm boy, Luke Skywalker, embarks on a journey to become a Jedi and help the Rebel Alliance destroy the evil Empire’s ultimate weapon, the Death Star."
      />

      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/files/Titanic.mpw.102378_480x.progressive.jpg?v=1709331723"
        title="Titanic"
        genre="Drama, Romance"
        rating="7.9"
        description="A sweeping romance set against the ill-fated voyage of the Titanic, where a young aristocrat falls in love with a poor artist, defying social expectations."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/files/Godfather.mpw.102810_480x.progressive.jpg?v=1707501178"
        title="The Godfather"
        genre="Crime, Drama"
        rating="9.2"
        description="The epic saga of the Corleone crime family, focusing on the rise of Michael Corleone as he transforms from reluctant outsider to ruthless mafia boss."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/products/forrest-gump---24x36_480x.progressive.jpg?v=1645558337"
        title="Forrest Gump"
        genre="Drama, Romance"
        rating="8.8"
        description="A kind-hearted man with a low IQ unknowingly influences key moments in history while searching for love and purpose in his extraordinary yet simple life."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/products/matrix_5c9b9eb0-6122-4787-85e7-fa81c37919af_480x.progressive.jpg?v=1639076224"
        title="The Matrix"
        genre="Action, Science Fiction"
        rating="8.7"
        description="A hacker named Neo discovers that reality is a simulation controlled by machines. He joins a rebellion to free humanity and uncover his true destiny."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/products/pulp_fiction_ver2_xlg_480x.progressive.jpg?v=1581622299"
        title="Pulp Fiction"
        genre="Crime, Drama"
        rating="8.9"
        description="A nonlinear crime drama intertwining multiple stories of hitmen, a boxer, and small-time criminals, all connected by fate, violence, and dark humor."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/files/shawshank_eb84716b-efa9-44dc-a19d-c17924a3f7df_480x.progressive.jpg?v=1709821984"
        title="The Shawshank Redemption"
        genre="Drama"
        rating="9.3"
        description="A wrongly convicted man, Andy Dufresne, is sent to Shawshank Prison, where he forges a deep friendship and quietly plots an escape that takes decades to unfold."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/products/darkknight.building.mp_480x.progressive.jpg?v=1648745750"
        title="The Dark Knight"
        genre="Action, Crime, Drama"
        rating="9.0"
        description="Batman faces his greatest challenge when the chaotic and unpredictable Joker wreaks havoc on Gotham. As the city descends into madness, Batman must confront the fine line between hero and vigilante."
      />
      
      <MovieCard 
        poster="https://www.movieposters.com/cdn/shop/files/inception.mpw.123395_9e0000d1-bc7f-400a-b488-15fa9e60a10c_480x.progressive.jpg?v=1708527589"
        title="Inception"
        genre="Science Fiction, Thriller"
        rating="8.8"
        description="A skilled thief who enters people’s dreams to steal secrets is given the ultimate challenge: plant an idea in someone’s mind. But as reality and dreams blur, the mission becomes dangerously complex."
      />
    </div>
  );
}
