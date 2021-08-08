import { Pool } from 'pg';

class PlaylistService {

  private pool: Pool;

  constructor() {
    this.pool = new Pool();
  }

  async getSongsfromPlaylist(playlistId: string) {
    const query = {
      text: `SELECT songs.* FROM playlistsongs
      LEFT JOIN songs ON songs.id = playlistsongs."songId"
      WHERE playlistsongs."playlistId" = $1`,
      values: [playlistId],
    };
    const result = await this.pool.query(query);
    return result.rows;
  }
}

export default PlaylistService;
