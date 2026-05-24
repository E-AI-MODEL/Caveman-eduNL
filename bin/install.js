#!/usr/bin/env node
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

const REPO = 'E-AI-MODEL/Caveman-eduNL';
const ROOT = path.resolve(__dirname, '..');
const SKILL_SOURCE = path.join(ROOT, 'SKILL.md');
const DEFAULT_HOME = path.join(os.homedir(), '.caveman-nl');
const DEFAULT_SKILL_DIR = path.join(DEFAULT_HOME, 'skills', 'caveman-edunl');
const AGENTS_FILE = path.join(process.cwd(), 'AGENTS.md');
const BEGIN = '<!-- caveman-edunl-begin -->';
const END = '<!-- caveman-edunl-end -->';

function parseArgs(argv) {
  const opts = { dryRun: false, uninstall: false, withInit: false, skillDir: DEFAULT_SKILL_DIR, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--uninstall' || a === '-u') opts.uninstall = true;
    else if (a === '--with-init') opts.withInit = true;
    else if (a === '--skill-dir') {
      const v = argv[++i];
      if (!v) die('--skill-dir heeft pad nodig');
      opts.skillDir = expandHome(v);
    } else if (a === '--help' || a === '-h') opts.help = true;
    else die(`Onbekende optie: ${a}`);
  }
  return opts;
}

function expandHome(p) {
  if (p === '~') return os.homedir();
  if (p.startsWith('~/')) return path.join(os.homedir(), p.slice(2));
  return path.resolve(p);
}

function die(msg) { console.error(`caveman-edunl: ${msg}`); process.exit(2); }
function log(opts, msg) { console.log(opts.dryRun ? `[dry-run] ${msg}` : msg); }
function readSkill() { return fs.readFileSync(SKILL_SOURCE, 'utf8'); }
function writeFile(opts, file, content) {
  log(opts, `write ${file}`);
  if (opts.dryRun) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
}

function installSkill(opts) {
  const skillTarget = path.join(opts.skillDir, 'SKILL.md');
  writeFile(opts, skillTarget, readSkill());
  console.log(`Onderwijs-skill geïnstalleerd: ${skillTarget}`);
}

function initAgentsBlock(opts) {
  const block = `${BEGIN}\nGebruik Caveman-eduNL bij onderwijscontext: /caveman-teach, /caveman-check, /caveman-scaffold, leerlinguitleg, lesvoorbereiding, feedback of formatief handelen.\n\nLaad regels uit: ${path.join(opts.skillDir, 'SKILL.md')}\n\nBelangrijk: begrip boven kortheid. Nieuwe uitleg niet hard comprimeren. Toetsvragen en checkvragen letterlijk laten.\n${END}\n`;
  let current = fs.existsSync(AGENTS_FILE) ? fs.readFileSync(AGENTS_FILE, 'utf8') : '';
  const re = new RegExp(`${BEGIN}[\\s\\S]*?${END}\\n?`, 'm');
  const next = re.test(current) ? current.replace(re, block) : `${current}${current && !current.endsWith('\n') ? '\n' : ''}\n${block}`;
  writeFile(opts, AGENTS_FILE, next);
  console.log(`Repo-instructie bijgewerkt: ${AGENTS_FILE}`);
}

function uninstall(opts) {
  const skillTarget = path.join(opts.skillDir, 'SKILL.md');
  log(opts, `remove ${skillTarget}`);
  if (!opts.dryRun) {
    try { fs.unlinkSync(skillTarget); } catch (_) {}
    try { fs.rmdirSync(opts.skillDir); } catch (_) {}
  }
  let current = fs.existsSync(AGENTS_FILE) ? fs.readFileSync(AGENTS_FILE, 'utf8') : '';
  const re = new RegExp(`\\n?${BEGIN}[\\s\\S]*?${END}\\n?`, 'm');
  const next = current.replace(re, '\n').replace(/\n{3,}/g, '\n\n');
  if (current !== next) writeFile(opts, AGENTS_FILE, next);
  console.log('Caveman-eduNL verwijderd.');
}

function help() {
  console.log(`Caveman-eduNL installer\n\nGebruik:\n  caveman-edunl [--with-init] [--dry-run]\n  caveman-edunl --uninstall\n\nOpties:\n  --with-init        Voeg AGENTS.md blok toe aan huidige repo\n  --skill-dir <pad>  Installeer SKILL.md in eigen pad\n  --dry-run          Toon acties, schrijf niets\n  --uninstall        Verwijder skill en AGENTS.md blok\n\nVoor npx:\n  npx -y github:${REPO} -- --with-init`);
}

const opts = parseArgs(process.argv.slice(2));
if (opts.help) help();
else if (opts.uninstall) uninstall(opts);
else {
  installSkill(opts);
  if (opts.withInit) initAgentsBlock(opts);
  console.log('Klaar. Gebruik /caveman-teach, /caveman-check of /caveman-scaffold.');
}
