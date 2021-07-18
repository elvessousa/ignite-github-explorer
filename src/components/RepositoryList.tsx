import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repos.scss';

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/elvessousa/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map((repo: Repository) => (
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </ul>
    </section>
  );
}
